import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { createActionForSearchQueryChange, searchEvents } from '../actions/layoutActions';
import SearchComponent from '../components/SearchComponent';
import { IApplicationState } from '../store/applicationState';

interface ISearchPropsFromState {
    query: string
}
  
interface ISearchPropsFromDispatch {    
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    searchEvents: typeof searchEvents;
}

class SearchContainer extends React.Component<ISearchPropsFromState & ISearchPropsFromDispatch, {}> {
    public render() {
        return (
            <SearchComponent
                query={this.props.query}
                onHandleChange={this.props.createActionForSearchQueryChange}
                onSearch={this.props.searchEvents}
            />
        );    
    }
}


const mapStateToProps = ({ layout }: IApplicationState) => ({
    query: layout.searchQuery
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({    
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    searchEvents: bindActionCreators(searchEvents, dispatch),
    // Alternative implementation:
    // createActionForSearchQueryChange: (query: string) => {
    //     dispatch(createActionForSearchQueryChange(query));
    // },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
