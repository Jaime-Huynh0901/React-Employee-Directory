import React from "react"
import {InputGroup, FormControl, Button} from "react-bootstrap";


const FormResult = (props) => {
    const {handleSortedType,handleFilterType,handleFilterInput, handleSubmit,resetFilter} = props

    return (
        <div>
            <select 
            onChange={e => handleSortedType(e)}
            className="mb-3">
                <option>sort</option>
                <option value="First">First</option>
                <option value="Last">Last</option>
                <option value="Age">Age</option>
                <option value="Gender">Gender</option>
            </select>
            <InputGroup className="mb-3">
                <select 
                onChange={e => handleFilterType(e)}>
                    <option>filter</option>
                    <option value="Age LT">Age Lower Than</option>
                    <option value="Age GT">Age Greater Than</option>
                    <option value="Gender">Gender</option>
                </select>
                <FormControl 
                aria-describedby="basic-addon1"
                onChange={e => handleFilterInput(e)} />
                <InputGroup.Append>
                    <Button 
                    variant="outline-secondary"
                    onClick={handleSubmit}
                    >Submit</Button>
                    
                    <Button 
                    variant="outline-secondary"
                    onClick={resetFilter}
                    >Reset Filter</Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
}


export default FormResult;