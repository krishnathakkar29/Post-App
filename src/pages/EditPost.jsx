import React, {useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'
import service from '../appwrite/config'



function EditPost() {


    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug)
            .then((post) => {
                setPost(post)
            })
        }else{
            navigate('/')
        }
    } , [slug , navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm {...post} />
        </Container>
    </div>
  ) : null
}

export default EditPost