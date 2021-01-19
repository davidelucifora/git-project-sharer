const shareBtn = document.getElementById('share-button')
const userNameField = document.getElementById('username-field') 
const repoField = document.getElementById('repo-field')
const shareWrapper = document.getElementById('share-wrapper')
const nameField = document.getElementById('name-field')

shareBtn.addEventListener('click', shareFunction);

function shareFunction(e){
e.preventDefault()
        
        shareWrapper.innerHTML =''

        const shareDiv = document.createElement('div')
        shareDiv.id = 'share-div'
        const copyButton = document.createElement('button')
        let resultParagraph = document.createElement('p')
        shareDiv.appendChild(resultParagraph)
        shareDiv.appendChild(copyButton)
        shareWrapper.appendChild(shareDiv)
        copyButton.type = 'button'
        copyButton.innerText = 'Copy to Clipboard'
        resultParagraph.innerHTML = `Hi! Just finished working on my <span>${nameField.value}</span> project! <br><br>

         Live: <a href="https://${userNameField.value}.github.io/${repoField.value}/">https://${userNameField.value}.github.io/${repoField.value}/</a><br>
         Code: <a href="https://github.com/${userNameField.value}/${repoField.value}/">https://github.com/${userNameField.value}/${repoField.value}/</a><br>`

         copyButton.addEventListener('click', function(){
             let value = resultParagraph.innerText
            navigator.clipboard.writeText(value)
            this.innerText ="Copied!"
            setTimeout(function(){
                copyButton.innerText = "Copy to Clipboard"
            },900)

         })

}

