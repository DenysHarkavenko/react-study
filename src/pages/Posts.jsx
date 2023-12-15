import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { PostFilter } from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import { MyButton } from '../components/UI/button/MyButton'; 
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import { Loader } from '../components/UI/loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import { Pagination } from '../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

 

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useEffect(() => { // при завантаженні сторінки (саме тому пустий масив), буде виконуватись функція
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function changePage(page){
    setPage(page)
    fetchPosts(limit, page)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>   
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter} 
      />{postError &&
        <h1>Error {postError}</h1>
      }
      {isPostsLoading 
        ? <Loader />
        : <PostList  remove={removePost} posts={sortedAndSearchPosts} title={'JavaScript'}/>
      }

      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts;
