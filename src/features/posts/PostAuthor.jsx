import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice';

const PostAuther = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    
    return (
        <span>by { author ? author.name : 'Unknown User' }</span>
    )
}

export default PostAuther;