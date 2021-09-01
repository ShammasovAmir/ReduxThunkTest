import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './actions'

const Posts = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () =>
    state.loading ? (
      <h1>Loading</h1>
    ) : (
      state.items.map((el) => <h3 key={el.id}>{el.title}</h3>)
    )

  return <div>{renderPosts()}</div>
}

export default Posts
