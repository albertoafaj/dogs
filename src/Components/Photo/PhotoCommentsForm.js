import React from 'react'
import useFetch  from '../../Hooks/useFetch'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error'

const PhotoCommentsForm = ({id, setComments}) => {
  const {request, error} = useFetch();
  const [comment, setComment] = React.useState('')
  const token = window.localStorage.getItem('token');
  
  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = COMMENT_POST(id,{comment}, token);
    const {response, json} = await request(url,options);
    if(response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        placeholder="Comente.."
        name="comment" id="comment"
      ></textarea>
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
