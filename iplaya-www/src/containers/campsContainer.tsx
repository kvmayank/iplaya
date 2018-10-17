import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadCamps } from '../actions/campActions';
import CampsComponent from '../components/CampsComponent';
import ICamp from '../models/camp';
import { IApplicationState } from '../store/applicationState';

interface ICampProps {
    camps: ICamp[]
}
  
interface ICampPropsFromDispatch {
    loadCamps: typeof loadCamps
}

class CampsContainer extends React.Component<ICampProps & ICampPropsFromDispatch, {}> {
    public componentDidMount() {
        this.props.loadCamps();
    }

    public render() {
        return (
            <CampsComponent camps={this.props.camps} />
        );    
    }
}


const mapStateToProps = ({ camps }: IApplicationState) => ({
    camps: camps.camps
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadCamps: bindActionCreators(loadCamps, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampsContainer);
  