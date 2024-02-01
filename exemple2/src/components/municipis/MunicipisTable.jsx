import React, { useState, useEffect, Fragment } from "react";
import { ListGroup, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AG_GRID_LOCALE_CAT } from "./language.cat"; // Traduccions del Grid

export default function MunicipisTable() {
    const [municipis, setMunicipis] = useState([]);
    const [descarregant, setDescarregant] = useState(true);
    const navigate = useNavigate();
    const [columnes, setColumnes] = useState([
        { field:"id", headerName:"Codi", width:100, filter:true, floatingFilter:true },
        { field:"nom", headerName:"Municipi", width:200, sortable:true, filter:true, floatingFilter:true },
        { field:"illa.nom", headerName:"Illa", width:200, sortable:true, filter:true, floatingFilter:true },
    ]);

    /*
    useEffect(
        () => {
            fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis')
                .then(response => {
                    return response.json(response);
                })
                .then(jsonresposta => {
                    setMunicipis(jsonresposta.result);
                    setDescarregant(false);
                }
                )
                .catch(function (error) {
                    console.log(error);
                })
        }
        ,
        []
    );
    */

    useEffect(() => { descarrega() }, []);
    // Exemple de ftech amb async/await
    const descarrega = async () => {
        try {
            const resposta = await fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis');
            // if (resposta.status !== 200) throw 'Error en descarregar les dades';
            const jsonresposta = await resposta.json();
            setMunicipis(jsonresposta.result);
        } catch (error) {
            console.log(error);
        }
        setDescarregant(false);
    }

    if (descarregant) {
        return (
            <div>
                <h1>Municipis</h1>
                <Spinner />
            </div>
        );
    }
    else {
        return (
            <>
                <hr />
                <Row md={4}>
                    <Col>
                        <h4>Llista de Municipis</h4>
                    </Col>
                    <Col>
                        <Button
                            variant="warning"
                            type="button"
                            onClick={() => {
                                navigate("/municipis/afegir");
                            }}
                        >
                            +
                        </Button>
                    </Col>
                </Row>
                <br />
                <div className="ag-theme-quartz" style={{ height: 475, width: '50%' }}>
                    <AgGridReact
                        columnDefs={columnes}
                        rowData={municipis}
                        pagination={true}
                        localeText={AG_GRID_LOCALE_CAT}
                        paginationPageSize={8}
                        onRowClicked={(e) => {
                            navigate("/municipis/" + e.data.id);
                        }}
                    />
                </div>
            </>
        );
    }

}    