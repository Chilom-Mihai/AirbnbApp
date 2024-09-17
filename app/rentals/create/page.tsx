import { SubmitButton } from "@/components/form/Buttons";
import CategoriesInput from "@/components/form/CategoriesInput";
import CountriesInput from "@/components/form/CountriesInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createPropertyAction } from "@/utils/actions";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Gatway Awaits You Here"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          {/* text area / description */}
          <TextAreaInput
            name="description"
            labelText="Description (10 - 100 words)"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <SubmitButton text="Create Rental" className="mt-12"></SubmitButton>
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
