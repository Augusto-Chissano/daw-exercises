'use client';

import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { useState } from "react";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
     task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
     const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
     const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
     const [taskToedit, setTaskToedit] = useState(task.text);
     const router = useRouter()

     const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
          e.preventDefault();
           const updatedTodo = await editTodo({
                id: task.id,
                text: taskToedit
           });
          setOpenModalEdit(false);
          router.refresh();
     }

     const handleDeleteTask = async (id: string) => {
          await deleteTodo(id);
          setOpenModalDelete(false);
          router.refresh();
     }

     return (
          <tr key={task.id}>
               <td className="w-full">{task.text}</td>
               <td className="flex gap-4">
                    <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" size={20} />
                    <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                         <form onSubmit={handleSubmitEditTodo}>
                              <h3 className='font-bold text-lg'>Edit task</h3>
                              <div className='modal-action'>
                                   <input
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-bordered w-full"
                                        value={taskToedit} onChange={(e) => setTaskToedit(e.target.value)} />
                                   <button type='submit' className='btn '>Submit</button>
                              </div>
                         </form>
                    </Modal>
                    <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor="pointer" size={20} />
                    <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                         <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
                         <div className="modal-action">
                              <button className="btn"
                                   onClick={() => handleDeleteTask(task.id)}
                              >Yes</button>
                         </div>
                    </Modal>
               </td>
          </tr>
     )
}

export default Task;