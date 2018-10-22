import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadArts } from '../actions/artActions';
import { createActionForSearchDomainChange, createActionForSearchQueryChange, search } from '../actions/layoutActions';
import ArtsComponent from '../components/ArtsComponent';
import IArt from '../models/art';
import { IApplicationState } from '../store/applicationState';
import { SearchDomain } from '../store/layout/layoutState'

interface IArtProps {
    arts: IArt[],
    searchQuery: string,
    searchDomain: SearchDomain,
}
  
interface IArtPropsFromDispatch {
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    createActionForSearchDomainChange: typeof createActionForSearchDomainChange;
    loadArts: typeof loadArts,
    search: typeof search,
}

class ArtsContainer extends React.Component<IArtProps & IArtPropsFromDispatch, {}> {
    public componentDidMount() {
        if (this.props.searchDomain === SearchDomain.arts && this.props.searchQuery.length > 0) {
            this.props.search(this.props.searchQuery, this.props.searchDomain);
        } else {
            this.props.createActionForSearchDomainChange(SearchDomain.arts);
            this.props.createActionForSearchQueryChange('');
            this.props.loadArts();
        }
    }

    public render() {
        return (
            <ArtsComponent arts={this.props.arts} />
        );    
    }
}


const mapStateToProps = ({ arts, layout }: IApplicationState) => ({
    arts: arts.arts,
    searchDomain: layout.searchDomain,
    searchQuery: layout.searchQuery,
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    createActionForSearchDomainChange: bindActionCreators(createActionForSearchDomainChange, dispatch),
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    loadArts: bindActionCreators(loadArts, dispatch),
    search: bindActionCreators(search, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtsContainer);
  