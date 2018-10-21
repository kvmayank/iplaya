import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux'
import { createActionForSearchDomainChange, createActionForSearchQueryChange, searchEvents } from '../actions/layoutActions';
import SearchComponent from '../components/SearchComponent';
import { IApplicationState } from '../store/applicationState';
import { SearchDomain } from '../store/layout/layoutState';


interface IPropsFromState {
    query: string,
    domain: string,
}
  
interface IPropsFromDispatch {    
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    createActionForSearchDomainChange: typeof createActionForSearchDomainChange;
    searchEvents: typeof searchEvents;
}

class SearchContainer extends React.Component<
    IPropsFromState & IPropsFromDispatch & RouteComponentProps<any>,
    {}> {

    public componentDidUpdate(prevProps: RouteComponentProps<any>): void {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            // base path changed
            this.dispatchDomainUpdateForCurrentPath();
        }
    }

    public componentDidMount() {
        this.dispatchDomainUpdateForCurrentPath();
    }
    
    public render() {
        return (
            <SearchComponent
                query={this.props.query}
                domain={this.props.domain}
                onSearchQueryChange={this.props.createActionForSearchQueryChange}
                onSearchDomainChange={this.props.createActionForSearchDomainChange}
                onSearch={this.props.searchEvents}
            />
        );    
    }

    private dispatchDomainUpdateForCurrentPath(): void {
        switch(this.props.location.pathname) {
            case '/events':
                this.props.createActionForSearchDomainChange(SearchDomain.events);
                break;
            case '/camps':
                this.props.createActionForSearchDomainChange(SearchDomain.camps);
                break;
            case '/arts':
                this.props.createActionForSearchDomainChange(SearchDomain.arts);
                break;
        }
    }    
}

const mapStateToProps = ({ layout }: IApplicationState) => ({
    domain: layout.searchDomain,
    query: layout.searchQuery,    
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({        
    createActionForSearchDomainChange: bindActionCreators(createActionForSearchDomainChange, dispatch),
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    searchEvents: bindActionCreators(searchEvents, dispatch),
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
