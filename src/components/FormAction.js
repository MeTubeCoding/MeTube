function register(){
    let local = {
        "name": "test",
        "firstname": "test",
        "country": "test",
        "city": "test",
        "username": "test",
        "email": "test",
        "password": "test"
      };
     
      fetch("http://127.0.0.1:5600/data",{
     
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(local)
     })
     .then((res)=>{
        return res.text();
        console.log(res)
     })
     .then((res)=>{
        console.log(res)
     })
  }
  

export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}