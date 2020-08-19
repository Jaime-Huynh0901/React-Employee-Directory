import React, {Component} from "react";
import API from "../utils/API";
import FormResult from "./FormResult";
import FormAction from "./FormAction";


class Directory extends Component {

    state = {
        results: [],
        sortType: '',
        filterType: '',
        input: '',
        preState: []
    }

    componentDidMount() {
        this.displayRandomUser();
    }

    sortFunction = (type, array) => {
        let sortedArray = [...array].sort( (a, b) => {
            switch(type) {
                case 'First':
                    let firstA = a.name.first.toUpperCase();
                    let firstB = b.name.first.toUpperCase();
                    if (firstA < firstB) {
                        return -1;
                    }
                    if (firstA > firstB) {
                        return 1;
                    }
                    return 0;
                case 'Last':
                    let lastA = a.name.last.toUpperCase();
                    let lastB = b.name.last.toUpperCase();
                    if (lastA < lastB) {
                        return -1;
                    }
                    if (lastA > lastB) {
                        return 1;
                    }
                    return 0;
                case 'Age':
                    let ageA = a.dob.age;
                    let ageB = b.dob.age;
                    if (ageA < ageB) {
                        return -1;
                    }
                    if (ageA > ageB) {
                        return 1;
                    }
                    return 0;
                case 'Gender':
                    let genderA = a.gender.toUpperCase();
                    let genderB = b.gender.toUpperCase();
                    if (genderA < genderB) {
                        return -1;
                    }
                    if (genderA > genderB) {
                        return 1;
                    }
                    return 0;
            }
        })
        // console.log(sortedArray);
        this.setState({results: sortedArray});
    };

    filterFunction = (type, array, input) => {
        this.setState({preState: this.state.results});
        let filteredArray
            if (type === "Gender") {
                filteredArray = [...array].filter(user => user.gender.toUpperCase() === input.toUpperCase() )
                this.setState({results: filteredArray});
            }
            else if (type ==="Age LT") {
                filteredArray = [...array].filter(user => user.dob.age < parseInt(input) )
                this.setState({results: filteredArray});
            }
            else if (type ==="Age GT") {
                filteredArray = [...array].filter(user => user.dob.age > parseInt(input) )
                this.setState({results: filteredArray});
            }
    };

    displayRandomUser = async () => {
        try{
            const res = await API.getUserList();
            console.log(res.data.results);
            this.setState({results: res.data.results});
        }
        catch(err) {
            console.log(err);
        }
    };

    handleSortedType = e => {
        this.setState({sortType: e.target.value}, () => {
            this.sortFunction(this.state.sortType, this.state.results);
        });
        console.log(e.target.value);
    };

    handleFilterType = e => {
        this.setState({filterType: e.target.value});
        console.log(e.target.value);
    };

    handleFilterInput = e => {
        this.setState({input: e.target.value})
        console.log(e.target.value);
    };

    handleSubmit = () => {
        this.filterFunction(this.state.filterType, this.state.results, this.state.input);
    }

    resetFilter = () => {
        this.setState({results: this.state.preState});
    }

    


    render() {
        return (
            <div>
                <FormAction 
                handleSortedType={this.handleSortedType}
                handleFilterType={this.handleFilterType}
                handleFilterInput={this.handleFilterInput}
                handleSubmit={this.handleSubmit}
                resetFilter ={this.resetFilter}
                />
            <div>

                {this.state.results.map((user, index) => (
                    <FormResult 
                    key={index}
                    id={index+1}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    title={user.name.title}
                    gender={user.gender}
                    age={user.dob.age}
                    img={user.picture.large}
                    />
                ))}
                </div>

            </div>


        )
    }

}


export default Directory;
