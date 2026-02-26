import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router"
import { ArrowLeftIcon, Trash2Icon } from "lucide-react"
import api from "../lib/axios"
import toast from "react-hot-toast"

const NoteDetail = () => {
  const [note, setNote] = useState({})
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()
 
  const handleSbumit = (e) => {
    e.prevenDefault()
    setSaving(true)
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

  const deleteNote = async (e, id) => {
    e.preventDefault()
    if (!window.confirm("Are you sure you want to delete this note?")) return
    console.log('delete note clicked', note._id)
    try {
      await api.delete(`/notes/${note._id}`)
      toast.success('That note has been deleted')
      navigate('/')
    } catch (error) {
      console.error('Error in hadle delte', error)
      toast.error('Error deleting the note')
    }
  }
 

  useEffect(()=>{
    if(id) {
      console.log('mounted here is ID NOTE deatial', id)
      fetchNote(id)
    }
  }, [])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={deleteNote} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSbumit}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteDetail
