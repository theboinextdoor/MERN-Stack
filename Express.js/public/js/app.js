const App = () => {

    const [products, setProducts] = React.useState([])
    const [form, setform] = React.useState({
        name: '',
        price: ''
    })


    React.useEffect(() => {
        fetchProducts()
    }, [])


    function fetchProducts() {
        fetch('/api/products')
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)

                // setProducts
            })
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        if(!form.name || !form.price) {
            return ;
        }else{

        }
        fetch('/api/products' , {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(form)
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data)
        })
    }

    function updateform(event , field) {
        if(field =='name'){
            setform({
                ...form, 
                name : event.taret.value
            })
        }else if(field == price){
            setform({
                ...form,
                price: event.target.value

            })
        }
    }

    return (
        <>
            <div className="card mb-2 " >
                <div className="card-header">
                    Add a Product
                </div>

                <div className="card-body">
                <form onClick={handleSumbit}>

                    <input className="form-control mb-2" valeu={form.name} onChange={() => updateform(event,'name')} type="text" placeholder="Enter the name of the Products" />

                    <input className="form-control" onChange={() => updateform(event,'price')} type="text" value={form.price} placeholder="Enter the price of the Products" />

                    <button type="submit" className="btn btn-primary mt-3">
                            Submit
                    </button>
                </form>
            </div>
            </div>
            
            <ul className="list-group">
                {
                    products.map((data) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-item-center" key={data.id}>
                                <div>
                                    <strong>{data.name} </strong>
                                    ${data.price}
                                </div>
                                <button className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));