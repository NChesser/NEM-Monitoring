// ##############################
// // // Host styles
// #############################

const hostStyle = theme => ({
    hostBase: {
        //borderLeft: "10px solid #c41115",
        minHeight: 120,
        maxHeight: 120,
        minWidth: 200,
        maxWidth: 200,
        
    },
    title: {
        minHeight: 30,
        paddingTop: 5,
        paddingLeft: 5,
    },
    titleText: {
        paddingTop: 5,
        paddingLeft: 2,
        fontSize: 14,
    },
    status: {
        minHeight: 40,
        maxHeight: 40,
        //backgroundColor: `${hostColor}`,
        verticalAlign: "middle",
        //borderRight: "1px solid white",
    },
    statusIcon: {
        marginTop: 7.5,
        marginLeft: 2,
        color: "#FFFFFF",
    },
    statusText: {
        lineHeight: '1.5em',
        height: '3em',  
        position: "relative",
        top: "10%",
        fontSize: 12,
        color: "#FFFFFF",
        overflow: 'hidden',
    },
    errorBox:{
        backgroundColor: "#383733",
        borderLeft: "1px solid #FFFFFF",
    },
    errorBoxText: {
        position: "relative",
        top: "10%",
        textAlign: "center",
        fontSize: 12,
        color: "#FFFFFF",
    },
    values: {
        textAlign: "center",
        paddingTop: 7.5,
    },
    valuesText:{
        fontSize: 12,
    },
    Stats: {
        textDecoration: 'none',
    },

});

export default hostStyle