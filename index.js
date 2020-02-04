let localdata = localStorage.getItem('schedule') || ''
$(".calButton").on("click", function (event) {
    event.preventDefault()
    let buttonId = $(this).attr('id')
    console.log(buttonId);
    let i = buttonId.split('-')
    let data = $(`#data-${i[1]}`).val()
    console.log(data)
    console.log(`#data-${i[1]}`)
    console.log(i)
    localStorage.setItem(`schedule-${i[1]}`, data)
    console.log(`schedule-${i[1]}`, data)
})

let clearLocalData = localStorage.getItem('schedule') || ''
$('.clearButton').on('click', function(event) {
    event.preventDefault()
    let buttonId = $(this).attr('id')
    let i = buttonId.split('-')
    let data = $(`#data-${i[1]}`).val()
    console.log(data)
    console.log(`#data-${i[1]}`)
    console.log(i)
    localStorage.removeItem(`schedule-${i[1]}`,data)
    $(`#data-${i[1]}`).val(localStorage.getItem(`schedule-${i[1]}`))

})

$('#data-9').val(localStorage.getItem('schedule-9'))
$('#data-10').val(localStorage.getItem('schedule-10'))
$('#data-11').val(localStorage.getItem('schedule-11'))
$('#data-12').val(localStorage.getItem('schedule-12'))
$('#data-1').val(localStorage.getItem('schedule-1'))
$('#data-2').val(localStorage.getItem('schedule-2'))
$('#data-3').val(localStorage.getItem('schedule-3'))
$('#data-4').val(localStorage.getItem('schedule-4'))
$('#data-5').val(localStorage.getItem('schedule-5'))

let hour = moment().hours()
console.log(hour)
$('.colorCal').each(function () {
    let id = parseInt($(this).attr('id').split('-')[1])
    if (id < hour) {
        $(this).addClass('past')
    }
    else if (id === hour) {
        $(this).addClass('present')
    }
    else {
        $(this).addClass('future')
    }
})

$('#currentDay').text(moment().format('dddd, Do, MMMM, YYYY'))
// $('curentTime').text(moment.tz).format("4:55 pm", true, "America/Los_Angeles")



