
import './App.css';


const data = [
  {
    tier:"Free",
    price: 0,
    data:[
      {
        statusCondition:true,
        tag:"Single User"
      },
      {
        statusCondition:true,
        tag:"50GB Storage"
      },
      {
        statusCondition:true,
        tag:"unlimited Public Projects"
      },
      {
        statusCondition:true,
        tag:"Community Access"
      },
      {
        statusCondition:false,
        tag:"Unlimited Private Projects"
      },
      {
        statusCondition:false,
        tag:"Dedicated Phone Support"
      },
      {
        statusCondition:false,
        tag:"Free Subdomain"
      },
      {
        statusCondition:false,
        tag:"Monthly Status Reports"
      }

      
    ]
  },
  {
    tier:"Plus",
    price: 9,
    data:[
      {
        statusCondition:true,
        tag:"Single User"
      },
      {
        statusCondition:true,
        tag:"50GB Storage"
      },
      {
        statusCondition:true,
        tag:"unlimited Public Projects"
      },
      {
        statusCondition:true,
        tag:"Community Access"
      },
      {
        statusCondition:true,
        tag:"Unlimited Private Projects"
      },
      {
        statusCondition:true,
        tag:"Dedicated Phone Support"
      },
      {
        statusCondition:true,
        tag:"Free Subdomain"
      },
      {
        statusCondition:false,
        tag:"Monthly Status Reports"
      }
    ]
  },
  {
    tier:"PRO",
    price: 45,
    data:[
      {
        statusCondition:true,
        tag:"Single User"
      },
      {
        statusCondition:true,
        tag:"50GB Storage"
      },
      {
        statusCondition:true,
        tag:"unlimited Public Projects"
      },
      {
        statusCondition:true,
        tag:"Community Access"
      },
      {
        statusCondition:true,
        tag:"Unlimited Private Projects"
      },
      {
        statusCondition:true,
        tag:"Dedicated Phone Support"
      },
      {
        statusCondition:true,
        tag:"Free Subdomain"
      },
      {
        statusCondition:true,
        tag:"Monthly Status Reports"
      }
    ]
  },
]


function App() {
  return (
    <div className="container">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center mb-5">
      <h1 className="display-4 fw-normal text-body-emphasis headline">React Price Card Task</h1>
    </div>


    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3 text-center">
      {
        data.map((ele, index)=>{
          return (
            <div className="col" key={index}>
        
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal grey-text">{ele.tier}</h4>
                <h1 className="card-title pricing-card-title">${ele.price}<small className="text-body-secondary fw-light">/mo</small></h1>
              </div>
              <div className="card-body">
                
                <ul className="list-unstyled mt-3 mb-4">
                {
                  ele.data.map((listElement, listElementIndex)=>{
                    return (
                      <li key={listElementIndex} className={`list-element ${listElement.statusCondition?"":"grey-text"} `}> 
                      {listElement.statusCondition?<i className="bi bi-check-circle-fill"></i>:<i className="bi bi-x"></i>} {listElement.tag}
                      </li>
                    )
                  })
                }
                </ul>
                <button type="button" className="w-100 btn btn-lg ">BUTTON</button>
              </div>
            </div>
          </div>
          )
        })
      }
     
    
    </div>
    
    </div>
  );
}

export default App;
