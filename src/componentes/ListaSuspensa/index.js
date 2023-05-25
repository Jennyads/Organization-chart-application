import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

                {/* lista de string, para cada item recebido por parametro, retorna uma option */}
            </select>
            
        </div>
    )

}

export default ListaSuspensa