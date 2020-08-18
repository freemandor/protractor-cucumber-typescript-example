import { WelcomePage } from "../../page_objects/welcome_page"
import { LoginPage } from "../../page_objects/loginPage"
import { GithubLoginPage } from "../../page_objects/githubLoginPage";
import { MainPage } from "../../page_objects/mainPage";
import { SavedData } from "./savedData";


export class World {
    public welcomePage!: WelcomePage
    public loginPage!: LoginPage
    public githubLoginPage!: GithubLoginPage
    public mainPage!: MainPage
    public savedData = new SavedData()
    private codefreshUsername = process.env.CODEFRESH_USERNAME
    private codefreshPassword = process.env.CODEFRESH_PASSWORD
    private githubUsername = process.env.GITHUB_USERNAME
    private githubPassword = process.env.GITHUB_PASSWORD

    public getCodefreshUsername(): string  {
      return this.codefreshUsername
    }

    public getCodefreshPassword(): string  {
      return this.codefreshPassword
    }

    public getGithubUsername(): string  {
      return this.githubUsername
    }

    public getGithubPassword(): string  {
      return this.githubPassword
    }

  } 