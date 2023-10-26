import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import "./styles.css"

const AdminVan = () => {

    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("http://51.20.64.107:8080/vans")
            .then(res => res.json())
            .then(data => setVans(data))

    }, [vans])

    function deleteHandle(id){
        fetch(`http://51.20.64.107:8080/vans/${id}`,{
            method:"DELETE",
        }).then(res=>{
      
            if(res.status===200){       
            fetch("http://51.20.64.107:8080/vans")
            .then(res => res.json())
            .then(data => setVans(data))
            alert(`${id} will be deleted!`);
            return  
            }
            else{
                alert(`${id} Failed to delete resource!`) 
                throw new Error("Failed to delete resource!")
            }
            
        })
    }

    return (
        <div className='container'>
            <div className='table-header'>
                <div className='cell-header'>Serial No.</div>
                <div className='cell-header'>Image</div>
                <div className='cell-header'>Name</div>
                <div className='cell-header'>Description</div>
                <div className='cell-header'>Price</div>
                <div className='cell-header'>Option</div>
            </div>
            {vans?.map(({ id, name, imgUrl, price, description, type }) => (


                <div className='table-header' key={id}>
                    <div className='cell'>{id}</div>
                    <div className='cell'><img alt={name} src={imgUrl} /></div>
                    <div className='cell'>{name}</div>
                    <div className='cell'>{description}</div>
                    <div className='cell'>{price}<span>.00 LKR/day</span></div>
                    <div className='cell'>
                        <NavLink
                            to={`vans/${id}`}>
                        <IconButton aria-label="delete" size="large">
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                        </NavLink>
                        <IconButton onClick={()=>deleteHandle(id)} aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>


            ))}
        </div>
    )
}

export default AdminVan