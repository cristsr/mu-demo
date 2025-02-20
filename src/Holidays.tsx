import {useEffect, useState} from "react";
import {getHolydays, Holyday} from "./HolidaysService.ts";
import {NavLink} from "react-router";

function Holidays({country}: { country: string }) {
    const [holidays, setHolidays] = useState<Holyday[]>([])
    const [nextHoliday, setNextHoliday] = useState<number>(0)

    useEffect(() => {
        getHolydays({
            country: country,
            year: new Date().getFullYear(),
        }).then(setHolidays)
    }, []);

    useEffect(() => {
        setNextHoliday(holidays.findIndex(h => new Date(h.date.iso) > new Date()))
    }, [holidays]);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <NavLink to="/" end>
                            Regresar
                        </NavLink>
                    </a>
                </div>
            </nav>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Nombre de Festivo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Descripción</th>
                </tr>
                </thead>
                <tbody>
                {holidays.map((holy, id) => (
                    <tr className={nextHoliday === id ? 'table-danger' : ''} key={id}>
                        <td>{holy.name}</td>
                        <td>{new Date(holy.date.iso).toLocaleDateString('en-ZA')}</td>
                        <td>{holy.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>


    )
}

export default Holidays
