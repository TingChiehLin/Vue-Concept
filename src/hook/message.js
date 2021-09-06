export default function useMessage() {

    function showMessage() {
        console.log("Hi there this is from hook")
    }

    return {
        showMessage
    };
}
