const ConditionalRender = (props) => {
     return (
     <div>
          {props.isLoggedIn ? 'Usuário Logado' : 'Usuário Não Logado'}
     </div>
     )
}

export default ConditionalRender;