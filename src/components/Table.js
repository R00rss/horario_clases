import React from 'react'
import "./Table.css"
const Table = () => {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    /* const materias = [
        ["CG", "CG", "R2", "None", "None", "None"],
        ["CG", "CG", "R2", "None", "None", "None"],
        ["CG", "IA", "R2", "None", "R2", "None"],
        ["IA", "IA", "IG", "None", "R2", "BDD"],
        ["IA", "None", "IG", "None", "IG", "BDD"],
        ["IA", "None", "IG", "None", "IG", "BDD"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "BDD", "None", "None", "None", "None"],
        ["None", "BDD", "None", "None", "None", "None"],
    ] */
    const materias = [
        ["Compu-1", "None", "Compu-1", "None", "Formulación", "None"],
        ["Compu-1", "None", "Compu-1", "None", "Formulación", "None"],
        ["None", "None", "Estadística", "None", "Compu-1", "None"],
        ["None", "None", "Estadística", "None", "None", "None"],
        ["None", "Estadística", "None", "None", "None", "None"],
        ["None", "Estadística", "None", "None", "None", "None"],
        ["ALMUERZO", "ALMUERZO", "ALMUERZO", "ALMUERZO", "ALMUERZO", "ALMUERZO"],
        ["None", "Cuántica-2", "None", "Cuántica-2", "None", "None"],
        ["None", "Cuántica-2", "None", "Cuántica-2", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
        ["None", "None", "None", "None", "None", "None"],
    ]
    const horario = ["7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20"]

    return (
        <div className='table__container'>
            {/* <h1 className='title__table'>Horario 5to semestre</h1> */}
            <h1 className='title__table'>Horario de Clases Donita</h1>
            <table>
                <thead>
                    <tr>
                        <th>Hora</th>
                        {dias.map((day, i) => (<th key={i}>{day}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {horario.map((hora, i) => (
                        <tr key={i}>
                            <td className='td__hora'>{hora}</td>
                            {dias.map((day, j) => (
                                <td key={j} className={"materia " + materias[i][j]}>
                                    {materias[i][j]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table