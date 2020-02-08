import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import { Component } from "react";

export default(props) =>  (
        <div>
          <div className="search-pane">
            <FormControl>
                <Input
                  placeholder="Search movies"
                  onChange={e => props.search(e.target.value)} 
                />
            </FormControl>
          </div>
          <style jsx>{`
            .search-pane {
              display: flex;
              justify-content: space-between;
            }
          `}
          </style>
        </div>
 )