import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadArts } from '../actions/artActions';
import ArtsComponent from '../components/ArtsComponent';
import IArt from '../models/art';
import { IApplicationState } from '../store/applicationState';

interface IArtProps {
    arts: IArt[]
}
  
interface IArtPropsFromDispatch {
    loadArts: typeof loadArts
}

class ArtsContainer extends React.Component<IArtProps & IArtPropsFromDispatch, {}> {
    public componentDidMount() {
        this.props.loadArts();
    }

    public render() {
        return (
            <ArtsComponent arts={this.props.arts} />
        );    
    }
}


const mapStateToProps = ({ arts }: IApplicationState) => ({
    arts: arts.arts
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadArts: bindActionCreators(loadArts, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtsContainer);
  