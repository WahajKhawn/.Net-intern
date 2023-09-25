$(function () {
    getdeptdropdown();
    listemp();
})

function SaveChanges() {


    if (ValidateForm()) {
        $.ajax({

            url: "/Employee/AddEmployee",
            type: "GET",
            data: { empName: $("#txtEmpName").val(), empEmail: $("#txtEmpEmail").val(), empAge: $("#numEmpAge").val(), empAddress: $("#txtEmpAddress").val(), fkdeptid: $("#getdeptid").val() },
            success: function (data) {
                alert(data);
            },
            error: function (xhr) {
                alert("Error: " + xhr.status)
            }
        })

    }
}

function getdeptdropdown() {
    $.ajax({
        url: "/Employee/FetchEmployee",
        type: "GET",
        success: function (result) {
            var dropdwn = $("#getdeptid");
            var obj = JSON.parse(result);
            for (var i = 0; i < obj.length; i++) {

                dropdwn.append("<option value =" + obj[i].dept_ID + ">" + obj[i].deptName + "</option>")
            }
        },
        error: function (xhr) {
            alert("Error: " + xhr.status)
        }
    })
}

function ValidateForm() {
    var validation = true;
    var empName = $("#txtEmpName").val();
    var empEmail = $("#txtEmpEmail").val();
    var empAge = $("#numEmpAge").val();
    var empAddress = $("#txtEmpAddress").val();
    var fkdeptid = $("#getdeptid").val();

  /*  var validation = true*/

    if (empName == "") {
        $("#validateEmpName").text("Please enter employee name");
        $("#validateEmpName").removeClass("hidden");
        $("#empName").focus();
        validation = false;
    }
    else {
        var pattern_empName = /^[ a-zA-Z ]+$/;
        if (!pattern_empName.test(empName)) {

            $("#validateEmpName").text("Please enter a valid Name");
            $("#validateEmpName").removeClass("hidden");
            validation = false;
    }
    }

    if (empEmail == "") {
        $("#validateEmpEmail").text("Please enter employee email");
        $("#validateEmpEmail").removeClass("hidden");
        $("#empEmail").focus();
        validation = false;
    }
    else {
        //var pattern_empEmail = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var pattern_empEmail = /^([a-zA-Z0-9_.+-])+\@([a-zA-Z0-9-])+\.([a-zA-Z0-9]{2,4})+$/;
        if (!pattern_empEmail.test(empEmail)) {

            $("#validateEmpEmail").text("Please enter Age properly");
            $("#validateEmpEmail").removeClass("hidden");
 
            validation = false;
        }
    }

    if (empAge == "") {
        $("#validateEmpAge").text("Please enter employee Age");
        $("#validateEmpAge").removeClass("hidden");

        validation = false;
    }
    else {
        var pattern_empAge = /^\d{1,3}$/;
        if (!pattern_empAge.test(empAge)) {

            $("#validateEmpAge").text("Please enter email properly");
            $("#validateEmpAge").removeClass("hidden");

            validation = false;
        }
    }

    if (empAddress == "") {
        $("#validateEmpAddress").text("Please enter employee address");
        $("#validateEmpAddress").removeClass("hidden");
        $("#empAddress").focus();
        validation = false;
    }
    else {
        var pattern_empAddress = /^[ 0-9a-zA-Z,-./#\ ]+$/;
        if (!pattern_empAddress.test(empAddress)) {

            $("#validateEmpAddress").text("Please enter Address properly");
            $("#validateEmpAddress").removeClass("hidden");

            validation = false;
        }
    }

    if (fkdeptid == 0) {
        $("#ValidateDept").text("Please Select Department");
        $("#ValidateDept").removeClass("hidden");
        $("#getdeptid").focus();
        validation = false;
    }

    return validation;
}
function RemoveValidationError(id) {
    $("#"+id).text("");
    $("#"+id).addClass("hidden");
}

/*
function ValidateEmail(id) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empEmail.)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


function RemoveDropdownValidationError() {
    $("#" + id).text();
    $("#" + id).addClass("hidden");

}

function listemp() {
    sno = $("#sno").val();
    nameemp = $("#nameemp").val();
    emailemp = $("#emailemp").val()
    ageemp = $("#ageemp").val();
    addressemp = $("#addressemp").val();
    dept = $("#dept").val();

    if (var i = 0; i = nameemp.length; i++) {
        
}*/
function listemp() {
    $.ajax({
        url: "/Employee/Getemplist",
        type: "GET",
        success: function (result) {
            
            var listemp = $("#listdata");
            listemp.empty();
            
            var opt = JSON.parse(result);
            console.log(opt);
            for (var i = 0; i < opt.length; i++) {
                //dropdwn.append("<option value =" + obj[i].dept_ID + ">" + obj[i].deptName + "</option>")
                listemp.append(
                    `<tr>
                        <td id=\"sno"\>` + (i+1) + `</td>
                        <td id=\"nameemp"\>` + opt[i].employeeName + `</td>
                        <td id=\"emailemp"\>` + opt[i].email + `</td>
                        <td id=\"ageemp"\>` + opt[i].age + `</td>
                        <td id=\"addressemp"\>` + opt[i].Address + `</td>
                        <td id=\"deptemp"\>` + opt[i].deptName + `</td>
                    <td>
                    <button class=\"btn btn-danger table-bordered btn-sm"\ onclick=\"Delete(`+ opt[i].employee_ID + `)"\>Delete</button>

                    <button class="btn btn-success table-bordered btn-sm edit" onclick=\"Editemp(`+ opt[i].employee_ID +`)"\>Edit</button></a>
                </td>
                     </tr>`
                );  
            }
        },
        error: function (xhr) {
            alert("Error: " + xhr.status)
        }
    })
}
function Delete(empid) {
        
    $.ajax({
        url: "/Employee/Deleteemplist",
        type: "GET",
        data: { empid: empid},
        success: function (data) {
            alert(1);
            listemp();
        },
        error: function (xhr) {
            alert("Error: " + xhr.status)
        }
    })
}

function Editemp(empid) {
    $.ajax({
        url: "/Employee/Edit/",
        type: "GET",
        data: { empid: empid},
        success: function (data) {
            alert(1);
            listemp();
        }
    })
}














/*
function Editemp(empids) {
    alert(1)
        $.ajax({

            url: "/Employee/Editemplist",
            type: "GET",
            data: { empids: empids, empName: $("#txtEmpName").val('#nameemp'), empEmail: $("#txtEmpEmail").val('#emailemp'), empAge: $("#numEmpAge").val('#ageemp'), empAddress: $("#txtEmpAddress").val('#addressemp'), fkdeptid: $('#getdeptid').val('#deptemp') },
            success: function (data) {
                //var listemp = $("#listdata");
                listemp();
                alert(data);
            },
            error: function (xhr) {
                alert("Error: " + xhr.status)
            }
        })
}

       $(row).find(".edit").click(function () {
        console.log()
        var info = $(this).closest('tr').data('info');
        $('#txtEmpName').val(info.empName);
        $('#txtEmpEmail').val(info.empEmail);
        $('#numEmpAge').val(info.empAge);
        $('#txtEmpAddress').val(info.empAddress);
        $('#getdeptid').val(info.fkdeptid);
        $("#edit").show();
        $("#button").hide();
    });

    $('listdata').append(row);


var activeEditedRow;
$(row).find(".edit").click(function () {
    activeEditedRow = row;
    $(row).find('td').each(function () {
        if ($(this).hasClass("txt")) {
            myVal = $(this).html();
            $(this).html('<input type="text" value=' + myVal + '>')
        }
    });
    $("#edit").show();
    $("#button").hide();
});

$('#edit').click(function () {
    $(activeEditedRow).find('td').each(function () {
        myVal = $(this).find('input').val();
        $(this).html(myVal);
    });
})*/
