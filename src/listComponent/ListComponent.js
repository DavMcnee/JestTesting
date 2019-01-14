import React from 'react';
import api from '../api/ListApi';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.fetchListSuccess = this.fetchListSuccess.bind(this); 
        this.fetchListFailed = this.fetchListFailed.bind(this); 

    }

    fetchList() {
        api.getList()
        .then(this.fetchListSuccess)
        .catch(this.fetchListFailed);
    }

    fetchListSuccess(response) {
        console.log({response});
    };

    fetchListFailed(error) {
        console.log({error});
    };

    render() {
        return(<div>Some content</div>);
    };
}

export default ListComponent;