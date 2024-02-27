// Definir el diccionario con los datos para estilos
const datos = {
    nombreInstructor: "Juan Pablo Nardone", //OK
    emailInstructor: "juanpablo.nardone@bue.edu.ar", //OK
    linkedinInstructor: "https://www.linkedin.com/in/juan-pablo-nardone/", //OK
    numeroComision: "24078", //OK
    horariosComision: "Clases los Martes y Jueves de 19:00 a 20:30 hs (puntual).", //OK
    enlaceMeet: "https://meet.google.com/uoo-voop-uwu", //OK
    enlaceYouTube: "https://www.youtube.com/playlist?list=PLcVi00zZjeQNeEc-WkYZ61MguSPGDsQMG", //OK
    enlacePresentismo: "https://docs.google.com/forms/d/e/1FAIpQLSeoCI5ZdkZsYPxY93yXb_fmgmwKv18cREuiR01gKTNxsXOdYg/viewform?usp=sf_link",
    nombreTutor: "Valentina Lembo", //OK
    enlaceTutor: "https://docs.google.com/forms/d/e/1FAIpQLSdBcbwLF1qc1b6-BkhEFvizfDWxmZrbH_cPOMbSPn8RtXDn6w/viewform",
    guiaEstudiante: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/1835484/mod_resource/content/4/Guia%20del%20estudiante%202024.pdf", //OK
    enlaceDrive: "https://drive.google.com/drive/folders/1E1I6BWsCaPTgBSqgvm4tJg08onyIEWLh?usp=sharing", //OK
    enlacePlanEstudios: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/1836737/mod_resource/content/4/Plan%20de%20estudios-%20estudiantes-%20Codo%20a%20Codo%20Inicial%202024.pdf", //OK
    enlaceAV: "https://aulasvirtuales.bue.edu.ar/login/index.php",
    titulo: "Links importantes 24078"
};

document.addEventListener('DOMContentLoaded', function () {
    // Instructor
    document.getElementById('nombreInstructor').textContent = datos.nombreInstructor;
    document.getElementById('emailInstructor').href = 'mailto:' + datos.emailInstructor;
    document.getElementById('emailInstructor').textContent = datos.emailInstructor;
    document.getElementById('linkedinInstructor').href = datos.linkedinInstructor;

    // Comisión, días y horarios
    document.getElementById('numeroComision').textContent = datos.numeroComision;
    document.getElementById('horariosComision').textContent = datos.horariosComision;

    // Meet
    document.getElementById('enlaceMeet').href = datos.enlaceMeet;

    // YouTube
    document.getElementById('enlaceYouTube').href = datos.enlaceYouTube;

    // Presentismo
    document.getElementById('enlacePresentismo').href = datos.enlacePresentismo;

    // Tutor/a
    document.getElementById('nombreTutor').textContent = datos.nombreTutor;
    document.getElementById('enlaceTutor').href = datos.enlaceTutor;
    document.getElementById('guiaEstudiante').href = datos.guiaEstudiante;

    // Drive
    document.getElementById('enlaceDrive').href = datos.enlaceDrive;

    // Plan de estudios
    document.getElementById('enlacePlanEstudios').href = datos.enlacePlanEstudios;

    // Aula Virtual
    document.getElementById('enlaceAV').href = datos.enlaceAV;

    //Titulo
    document.getElementById('titulo').textContent = datos.titulo;

});