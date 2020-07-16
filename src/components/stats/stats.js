import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { If, Then } from '../../genericComponents/if/if.js';
import PoolStat from '../../genericComponents/poolStat/poolStat.js';


const Stats = props => {


  return(
    <>
    <div className="basicsComplete stats bound">
      <PoolStat character={props.character} stat="MIGHT" auxStat="TIER"/>
      <PoolStat character={props.character} stat="SPEED" auxStat="EFFORT"/>
      <PoolStat character={props.character} stat="INTELLECT" auxStat="XP"/>
    </div>
    </>
  )
}


const mapStateToProps = state => ({
  character: state.character,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Stats)