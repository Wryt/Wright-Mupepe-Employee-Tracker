import { ActionTypes } from '../utils/constants';

const initialState = {
    fetchRequested:false,
    fetchSuccess:false,
    fetchFailed:false,

    dragged:false,
    draggedIndex:[-1,-1],
    dropIndex:[-1,-1],
    hoverdetails:undefined,
    data:[
        {
            _id: "1",
            name:'Table 1',
            chairs:[
                {
                    _id:"1",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "1",
                        name:"Wright Mupepe",
                        designation: "Senior Engineer",
                        team_id:'1' ,
                        current_project: 'Telecoms'
                    }

                },
                {
                    _id:"2",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "10",
                        name:"Tongai Moyo",
                        designation: "Project Manager",
                        team_id:'1' ,
                        current_project: 'Telecoms'
                    }

                },
                {
                    _id:"3",
                    occupied:false,
                    matched:false,
                    hover:false,

                },
                {
                    _id:"4",
                    occupied:false,
                    matched:false,
                    hover:false,

                }
            ]
        },
        {
            _id: "2",
            name: "Table 2",
            chairs:[
                {
                    _id:"1",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "2",
                        name:"Aleck Macheso",
                        designation: "Junior Engineer",
                        team_id:'2' ,
                        current_project: 'Telecoms'
                    }

                },
                {
                    _id:"2",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "2",
                        name:"Peter Moyo",
                        designation: "Junior Engineer",
                        team_id:'2' ,
                        current_project: 'Telecoms'
                    }

                },
                {
                    _id:"3",
                    occupied:false,
                    matched:false,
                    hover:false,

                },
                {
                    _id:"4",
                    occupied:false,
                    matched:false,
                    hover:false,

                }
            ]
        },
        {
            _id: "3",
            name: "Table 3",
            chairs:[
                {
                    _id:"1",
                    occupied:false,
                    matched:false,
                    hover:false,

                },
                {
                    _id:"2",
                    occupied:false,
                    matched:false,
                    hover:false,
                },
                {
                    _id:"3",
                    occupied:false,
                    matched:false,
                    hover:false,
                },
                {
                    _id:"4",
                    occupied:false,
                    matched:false,
                    hover:false,
                }
            ]
        },
        {
            _id: "4",
            name: "Table 4",
            chairs:[
                {
                    _id:"1",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "30",
                        name:"Madinda Ndlovu",
                        designation: "Junior Engineer",
                        team_id:'4' ,
                        current_project: 'Networking'
                    }


                },
                {
                    _id:"2",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "31",
                        name:"Adam Ndlovu",
                        designation: "Junior Engineer",
                        team_id:'4' ,
                        current_project: 'Networking'
                    }


                },
                {
                    _id:"1",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "32",
                        name:"Peter Ndlovu",
                        designation: "Junior Engineer",
                        team_id:'4' ,
                        current_project: 'Networking'
                    }

                },
                {
                    _id:"4",
                    occupied:false,
                    matched:false,
                    hover:false,
                }
            ]
        },
        {
            _id: "5",
            name: "Table 5",
            chairs:[
                {
                    _id:"1",
                    occupied:false,
                    matched:false,
                    hover:false,

                },
                {
                    _id:"2",
                    occupied:false,
                    matched:false,
                    hover:false,
                },
                {
                    _id:"3",
                    occupied:false,
                    matched:false,
                    hover:false,

                },
                {
                    _id:"4",
                    occupied:false,
                    matched:false,
                    hover:false,
                }
            ]
        },
        {
            _id: "6",
            name: "Table 6",
            chairs:[
                {
                    _id:"1",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "20",
                        name:"John Chibadura",
                        designation: "Senior Developer",
                        team_id:'1' ,
                        current_project: 'Software Development'
                    }

                },
                {
                    _id:"2",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "22",
                        name:"Leonard Dembo",
                        designation: "Junior Developer",
                        team_id:'1' ,
                        current_project: 'Software Development'
                    }

                },
                {
                    _id:"3",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "23",
                        name:"Simon Chimbetu",
                        designation: "Junior Developer",
                        team_id:'1' ,
                        current_project: 'Software Development'
                    }

                },
                {
                    _id:"4",
                    occupied:true,
                    matched:false,
                    hover:false,
                    employee:{
                        _id: "24",
                        name:"Leonard Zhakata",
                        designation: "Team Lead",
                        team_id:'1' ,
                        current_project: 'Software'
                    }
                }
            ]
        }
    ],

    notificationText:''
};


export default function tableReducer (state = initialState, action){
    switch(action.type){

        case ActionTypes.DRAG_START:
            return {...state,dragged:true,draggedIndex:[action.payload.tableIndex,action.payload.chairIndex]};
            break;

        case ActionTypes.DRAG_OVER:
            return {...state,dropIndex:[action.payload.tableIndex,action.payload.chairIndex]};
            break;

        case ActionTypes.DRAG_LEAVE:
            return {...state,dropIndex:[-1,-1]};
            break;

        case ActionTypes.ON_DROP_REQUESTED:
            return state;
            break;

        case ActionTypes.ON_DROP_SUCCESS:
            return {...state,
                    data:action.payload.data,
                    dragged:false,
                    draggedIndex:[-1,-1],
                    dropIndex : [-1,-1],
                    shiftRequested:false,
                    shiftSuccess:true,
                    notificationText:action.payload.notificationText};
            break;

        case ActionTypes.ON_DROP_FAILURE:
            return {...state,
                    dragged:false,
                    draggedIndex:[-1,-1],
                    dropIndex : [-1,-1],
                    shiftRequested:false,
                    shiftSuccess:false,
                    notificationText:''};
            break;

        case ActionTypes.DRAG_END:
            return {...state,
                    dragged:false,
                    draggedIndex:[-1,-1]};
            break;

        case ActionTypes.MAP_TEAM_REQUESTED:
            return {...state};

        case ActionTypes.ON_MOUSE_OVER:
            var tempState = {...state};
            tempState.data[action.payload.tableIndex].chairs[action.payload.chairIndex].hover = true;
            tempState.hoverdetails = tempState.data[action.payload.tableIndex].chairs[action.payload.chairIndex].employee;
            return {...tempState};

        case ActionTypes.ON_MOUSE_LEAVE:
            var temp = {...state};
            temp.data[action.payload.tableIndex].chairs[action.payload.chairIndex].hover = false;
            temp.hoverdetails = undefined;
            return {...temp};

        case ActionTypes.SEARCH_BY_NAME:
            return state;

        case ActionTypes.SEARCH_SUCCESS:
            return {...state,data:action.payload.data};

        case ActionTypes.RESET:
            return initialState;

        default:
            return state;
    }
}
