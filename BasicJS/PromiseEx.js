const orders = () => 
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let notAvail = false;
            if(notAvail)
            {
                console.log("This Food is't available right now.");
                rej();
            }
            else
            {
                console.log("Your food is ready to eat.");
                res();
            }

        },3000)
    })
};

orders().then(()=>{
    console.log("Ok")
}).catch(()=>{
    console.log("Are You Sure?");
}).finally(()=>{
    console.log("Thanks");
})
