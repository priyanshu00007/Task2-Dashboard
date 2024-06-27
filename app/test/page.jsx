const page = () => {

    const handleform= async(formData)=>{
        "use server"
        console.log(formData)
        const username = formData.get("username");
        console.log("hello",username)
    }

  return (
    <div>
        <form action={handleform} >
            <input type="text" name="username" /> 
            <button>send</button>
        </form>
    </div>
  )
}

export default page