import { reducerCases } from "./Constants";

export const initState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: '4JbRQvcsqBZYLVU721VEc9',
    // selectedPlaylistId: '4nnklRoB1CWXfYL0QYlvEI',
    selectedPlaylist: null,
    currentlyPlaying: null,
    playerState: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists: action.playlists
            }
        }
        case reducerCases.SET_USER: {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        case reducerCases.SET_PLAYLIST: {
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist
            }
        }
        case reducerCases.SET_PLAYLING: {
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying
            }
        }
        case reducerCases.SET_PLAYER_STATE: {
            return {
                ...state,
                playerState: action.playerState
            }
        }
        default:
            return state
    }
}

export default reducer;