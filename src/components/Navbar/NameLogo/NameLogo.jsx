import logo from '../../../img/logo.png';

export const NameLogo = () => {
    return(
        <>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='titulo'>
                <h1>ITWorks</h1>
            </div>
        </>
        
    )
}