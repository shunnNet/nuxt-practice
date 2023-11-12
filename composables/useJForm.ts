import { useForm } from "vee-validate"
import type {
  GenericObject,
  FormOptions,
  SubmissionHandler,
  InvalidSubmissionHandler,
  PrivateFormContext,
} from "vee-validate"

type UseJFormConfigs = {
  errorSelector?: string
  scrollToError?: boolean
}

type UseJForm = <T extends GenericObject>(options: {
  options: UseJFormConfigs
  form: FormOptions<T>
}) => ReturnType<typeof useForm> & {
  handleSubmitWithJForm: (
    onValidSubmit: SubmissionHandler,
    onInvalidSubmit?: InvalidSubmissionHandler,
  ) => ReturnType<PrivateFormContext["handleSubmit"]>
}

export const useJForm: UseJForm = (options) => {
  const config = {
    errorSelector: ".error-msg",
    ...options,
  }

  const formContext = useForm(options.form)
  const scrollToError = () => {
    const el = document.querySelector(config.errorSelector)
    if (el) {
      console.log("scroll To error element")
    }
  }

  const handleSubmitWithJForm = (
    onValidSubmit: SubmissionHandler,
    onInvalidSubmit?: InvalidSubmissionHandler,
  ) => {
    const wrappedInValid: InvalidSubmissionHandler = (ctx) => {
      // Add Mixpanel logic here
      if (config.options.scrollToError) {
        scrollToError()
      }
      if (onInvalidSubmit) {
        onInvalidSubmit(ctx)
      }
    }

    return formContext.handleSubmit(onValidSubmit, wrappedInValid)
  }

  return { ...formContext, handleSubmitWithJForm }
}
