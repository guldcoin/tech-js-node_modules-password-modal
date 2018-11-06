window.initPasswordModal = async function (onSubmit, eid = 'content', submitValue = 'Decrypt', title = 'Password Encrypted Document') {
  await loadHTMLComponent(`/tech/js/node_modules/password-modal/password-modal.html`, eid)
  $('#password-modal-title').text(title)
  $('#password-modal-submit').prop('value', submitValue)
  $(`#password-modal-center`).modal('show')
  $('#password-modal-form').submit(onSubmit)
}

