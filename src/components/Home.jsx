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
render()
{
    return(
<div><h1>Home</h1></div>
    );
}
    }
export default Home