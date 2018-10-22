import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadCamps } from '../actions/campActions';
import { createActionForSearchDomainChange, createActionForSearchQueryChange, search } from '../actions/layoutActions';
import CampsComponent from '../components/CampsComponent';
import ICamp from '../models/camp';
import { IApplicationState } from '../store/applicationState';
import { SearchDomain } from '../store/layout/layoutState'

interface ICampProps {
    camps: ICamp[],
    searchQuery: string,
    searchDomain: SearchDomain,
}
  
interface ICampPropsFromDispatch {
    createActionForSearchQueryChange: typeof createActionForSearchQueryChange;
    createActionForSearchDomainChange: typeof createActionForSearchDomainChange;
    loadCamps: typeof loadCamps,
    search: typeof search,    
}

class CampsContainer extends React.Component<ICampProps & ICampPropsFromDispatch, {}> {
    public componentDidMount() {
        if (this.props.searchDomain === SearchDomain.camps && this.props.searchQuery.length > 0) {
            this.props.search(this.props.searchQuery, this.props.searchDomain);
        } else {
            this.props.createActionForSearchDomainChange(SearchDomain.camps);
            this.props.createActionForSearchQueryChange('');
            this.props.loadCamps();
        }
    }

    public render() {
        return (
            <CampsComponent camps={this.props.camps} />
        );    
    }
}


const mapStateToProps = ({ camps, layout }: IApplicationState) => ({
    camps: camps.camps,
    searchDomain: layout.searchDomain,
    searchQuery: layout.searchQuery,
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    createActionForSearchDomainChange: bindActionCreators(createActionForSearchDomainChange, dispatch),
    createActionForSearchQueryChange: bindActionCreators(createActionForSearchQueryChange, dispatch),
    loadCamps: bindActionCreators(loadCamps, dispatch),
    search: bindActionCreators(search, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampsContainer);
  