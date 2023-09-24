'use client'

import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newTodo = await addTodo({
      id: uuidv4(),
      text: newTaskValue
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new task
        <AiOutlinePlus />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} />
            <button type='submit' className='btn '>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
};

export default AddTask;
