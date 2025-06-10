import { useActionState } from "react";

const initialValues = {
  errors: null,
  enteredValues: {},
};

export function NewOpinion() {
  const [formState, formAction, pending] = useActionState(
    newOpinionAction,
    initialValues
  );

  async function newOpinionAction(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if (userName.trim().length == 0 || userName.trim().length < 3) {
      errors.push("Name should be of at least 3 characters long");
    }

    if (title.trim().length === 0) {
      errors.push("Title cannot be empty");
    }

    if (body.trim().length === 0) {
      errors.push("Body cannot be empty");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    console.log({
      userName,
      title,
      body,
    });

    return {
      errors: null,
      enteredValues: {
        userName,
        title,
        body,
      },
    };
  }
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
