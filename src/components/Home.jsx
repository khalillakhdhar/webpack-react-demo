import React from 'react';
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            taille:'',
            poid:'',
            indice:'',
            remarque:''

        };
        this.onChange=this.onChange.bind(this);
        this.reset=this.reset.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    onChange = e =>
    {
        this.setState({ [e.target.name] : e.target.value});
    }
    reset()
    {
        this.setState({
            taille:'',
            poid:'',
            indice:'',
            remarque:''
        })
    }
    handleSubmit(event)
    {
        let poid=this.state.poid;
        let taille=this.state.taille;
        if(this.state.poid!='' && this.state.taille!='')
        {
            let indice=Math.round(poid/Math.pow(taille,2));
            const imcval=<span>votre icm est {indice}</span>
            this.setState({indice:imcval})
            if(indice<20)
            {
                const rmq= <span className='alert alert-warning'>vous êtes maigre</span>;
                this.setState({remarque:rmq})
            
            }
            else if(indice<=25)
            {
                const rmq= <span className='alert alert-success'>vous êtes idéale</span>;
                this.setState({remarque:rmq})
            
            }
            else
            {
                const rmq= <span className='alert alert-danger'>vous êtes en surpoid</span>;
                this.setState({remarque:rmq})
            
            }
            
        }
        event.preventDefault;
    }
render()
{
    return(
        <div className="container">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    
        <h1 className='text-center'>Calcul IMC</h1>
        <div className='mb-3'>
            <label className='form-label'>Poid</label>
            <input type="text" pattern='[0-9.,]{2,7}' placeholder='votre poid ici' name="poid" value={this.state.poid} onChange={this.onChange} className="form-control"></input>

        </div>
        <div className='mb-3'>
            <label className='form-label'>Taille</label>
            <input type="text" pattern='[0-9.,]{2,7}' placeholder='votre taille ici' name="taille" value={this.state.taille} onChange={this.onChange} className="form-control"></input>

        </div>
        <div className='mb-3 text-center'>
            <input type="button" onClick={this.handleSubmit}   className='btn btn-primary' value="envoyer"></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="reset" onClick={this.reset}  className='btn btn-warning' value="vider"></input>
            
            <div className='text-center'>{this.state.indice}</div>
            <br></br><br></br><br></br>
            <div className='text-center'>{this.state.remarque}</div>

        </div>
    
    </div>
    <div className="col">
      
    </div>
  </div>
</div>

    );
}
    }
export default Home