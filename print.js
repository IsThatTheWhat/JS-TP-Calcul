$(function () {
    $(document).ready(function() {
        document.getElementById('print').addEventListener('click', function (e) {
	        e.preventDefault()
	        window.print();
	    })
    });
});