import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostHeader } from './components/PostHeader'
import { Content, PostContainer } from './style'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAM

export interface PostDetails {
  number: number
  url: string
  title: string
  comments: number
  content: string
  user: string
  createdAt: string
}

export function Post() {
  const { id } = useParams()
  const [postDetails, setPostDetails] = useState({} as PostDetails)

  async function getPostDetails() {
    const response = await api.get(
      `/repos/${username}/github-blog/issues/${id}`
    )
    const { number, html_url, title, comments, body, user, created_at } =
      response.data

    const fetchedPostDetails = {
      number,
      url: html_url,
      title,
      comments,
      content: body,
      user: user.login,
      createdAt: created_at,
    }

    setPostDetails(fetchedPostDetails)
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <PostContainer>
      <PostHeader postDetails={postDetails} />
      <Content>
        <ReactMarkdown children={postDetails.content} />
      </Content>
    </PostContainer>
  )
}
