import React from 'react';



const PoolStat = props => {

  console.log('char',props);

  return(
    <section className="layout border mainSize">
      <section className="border auxStat statBottomBox">
        <div className="border midline">{props.character[`${props.auxStat.toLowerCase()}`]}</div>
        <article className="border label">{props.auxStat}</article>
      </section>
      <section className="border midSection statBottomBox center">
        <article className="border fit midline">+</article>
        <article className="border fit midline">{props.character[`${props.stat.toLowerCase()}PoolMax`]}</article>
        <article className="border fit midline">-</article>
        <article className="border label">{props.stat}</article>
      </section>
        
      <section className="border bottomSection">
        <article className="border statBottomBox center">
          <div className="border midline">{props.character[`${props.stat.toLowerCase()}Pool`]}</div>
          <div className="border label">POOL</div>
        </article>
        <article className="border statBottomBox center">
          <div className="border midline">{props.character[`${props.stat.toLowerCase()}Edge`]}</div>
          <div className="border label">EDGE</div>
        </article>
      </section>
    </section>
  )
}

export default PoolStat;