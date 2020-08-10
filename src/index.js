// to require lib module
import React,{Component,useState, useEffect} from 'react'
import ReactDom from 'react-dom';

// import Pagination from './components/Pagination';
//import axios from 'axios';

import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';
// Different Logic
// const App = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);
  
//     useEffect(() => {
//       const fetchPosts = async () => {
//         setLoading(true);
//         const res = await axios.get('./db.json');
//         setPosts(res.data);
//         setLoading(false);
//       };
  
//       fetchPosts();
//     }, []);
  
//     // Get current posts
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);
//     return (
//         <div className='container mt-5'>
//           <h1 className='text-primary mb-3'>My Blog</h1>
//           {/* <Posts posts={currentPosts} loading={loading} /> */}
//           <Pagination
//             postsPerPage={postsPerPage}
//             totalPosts={posts.length}
//             paginate={paginate}
//           />
//         </div>
//       );
//     };
    

// Logical and html
class App extends Component {
    constructor(props){
        super(props);

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    filterNews(keyword){
        const output = this.state.news.filter((data)=>{
            return data.Drug.indexOf(keyword) > -1;
        })

        this.setState({filtered:output})
    }


    render(){
        console.log(`${this.state.filtered.length}`);
        return(
            <div>
                <Header newsSearch={(userText)=>{this.filterNews(userText)}}/>
                {/* <Length length = {this.state.filtered.length}/> */}
                <NewsList datalist={this.state.filtered}/>
                
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))

export default App;
// To make it availabe outside

/*

const App = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <Home/>
            <h1>My First React App</h1>
            <h2>This is Second Tag</h2>
            <div>
                <h1>This is from second div</h1>
            </div>
        </div>
    )
}*/