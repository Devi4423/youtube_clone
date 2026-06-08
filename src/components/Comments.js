import { FaCircleUser } from "react-icons/fa6";

const Comments = () => {

    const commentsData = [
        {
            name:"Gayathri Devi",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies:[]
        },
        {
            name:"Gayathri Devi",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies:[
                {
                    name:"Gayathri Devi",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                    replies:[
                        {
                            name:"Gayathri Devi",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                            replies:[]
                        }
                    ]
                },
                {
                    name:"Gayathri Devi",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                    replies:[]
                }
            ]
        },
        {
            name:"Gayathri Devi",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies:[]
        },
        {
            name:"Gayathri Devi",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies:[
                {
                    name:"Gayathri Devi",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                    replies:[]
                },
                {
                    name:"Gayathri Devi",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                    replies:[
                        {
                            name:"Gayathri Devi",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                            replies:[
                                {
                                    name:"Gayathri Devi",
                                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                                    replies:[
                                        {
                                            name:"Gayathri Devi",
                                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                                            replies:[]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name:"Gayathri Devi",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
            replies:[]
        }
    ]

    const Comments = ({data}) => {
        return(
            <div className="flex gap-2 items-start bg-gray-100 rounded-lg py-2 px-4 mb-2">
                <div className="text-2xl"><FaCircleUser/></div>
                <div>
                    <p className="text-sm">{data.name}</p>
                    <p className="text-sm">{data.text}</p>
                </div>
            </div>
        )
    }

    const CommentsList = ({comments}) => {
        return(
            <div className="border-l-2 border-gray-400 pl-4">
                {comments.map((comment,index)=>(
                    <div key={index} >
                        <Comments  data={comment}/>
                        <CommentsList comments={comment.replies}/>
                    </div>))}
            </div>
        )
    }

    return(
        <div>
            <h6 className="text-lg font-bold my-3">Comments</h6>
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default Comments;