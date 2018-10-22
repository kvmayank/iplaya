import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux'
import { createActionForSearchDomainChange, createActionForSearchQueryChange } from '../actions/layoutActions';
import SearchComponent from '../components/SearchComponent';
import { IApplicationState } from '../store/applicationState';

interface IPropsFromState {
    query: string,
    domain: string,
}
  
interface IPropsFromDispatch {    
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    createActionForSearchDomainChange: typeof createActionForSearchDomainChange;
}

class SearchContainer extends React.Component<
    IPropsFromState & IPropsFromDispatch & RouteComponentProps<any>,
    {}> {

    public render() {
        return (
            <SearchComponent
                query={this.props.query}
                domain={this.props.domain}
                onSearchQueryChange={this.props.createActionForSearchQueryChange}
                onSearchDomainChange={this.props.createActionForSearchDomainChange}
            />
        );    
    }
}

const mapStateToProps = ({ layout }: IApplicationState) => ({
    domain: layout.searchDomain,
    query: layout.searchQuery,    
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({        
    createActionForSearchDomainChange: bindActionCreators(createActionForSearchDomainChange, dispatch),
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    // Alternative implementation:
    // createActionForSearchQueryChange: (query: string) => {
    //     dispatch(createActionForSearchQueryChange(query));
    // },
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(SearchContainer),
);
