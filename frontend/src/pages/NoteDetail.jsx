import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { ArrowLeftIcon, Trash2Icon } from "lucide-react"
import api from "../lib/axios"
import toast from "react-hot-toast"

const NoteDetail = () => {
  const [note, setNote] = useState({})
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { id } = useParams()
 
  const handleSbumit = (e) => {
    e.prevenDefault()
    console.log('jere is change', title, content)
  }

  const fetchNote = async (id) => {
    try {
      const res = await api.get(`/notes/${id}`)
      console.log('success getting single note', res.data)
      setNote(res.data.note)
      toast.success(' Note is here')
    } catch (error) {
      console.error('eror fetching note', error)
      toast.error('current Note doez not exist')
    }finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(id) {
      console.log('mounted here is ID NOTE deatial', id)
      fetchNote(id)
    }
  }, [])
  
  return (
    <div className="min-h-screen min-w-screen py-10 px-20">
      
      <div className="constrols w-full flex justify-between mb-5"> 
        <Link to="/" className="btn btn-ghost mb-6">  
          <ArrowLeftIcon className="size-5"/>
          Back to the notes 
        </Link>
        <button className="btn btn-primary">
          <Trash2Icon 
            className="size-4 border border-1"
            onClick={()=> console.log('here would be delete')}
          />
        </button>        
      </div>
      
      <div className="card-body min-w-fit bg-slate-200">
        <form onSubmit={handleSbumit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="text">
                Title
              </span>
            </label>
            <input 
              className="input input-bordered"
              type="text" 
              placeholder={note?.title || 'here will be note'} 
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label"> 
              <span className="label-text">
                Content 
              </span>
            </label> 
            <textarea
              placeholder={note.content || 'here is plaec holder content'}
              className="textarea textarea-bordered h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="class-actions flex justify-end">
            <button type="submit" className="btn btn-primary" disabled={loading}> 
              {loading ? 'creating ...' : 'UpDate Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NoteDetail
