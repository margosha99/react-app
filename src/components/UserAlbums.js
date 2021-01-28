import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchUsersAlbums } from '../actions/getUserAlbumsAction';


function UserAlbums({userAlbums, fetchUserAlbums}) { 
    const { id } = useParams();    

    useEffect(() => {
        fetchUserAlbums(id)
    }, [])

    return (
        userAlbums.map((album,id) => {
            return <div className="user-album" key={id}>
                <p>Album: {album.title}</p>
            </div>
        })
    )
}

const mapStateToProps = state => {
    return {
        userAlbums: state.userAlbums
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUserAlbums: (userId) => dispatch(fetchUsersAlbums(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums)